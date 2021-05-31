from flask import request
from flask_restx import Resource, abort
from flask_cors import cross_origin
import twitter_apis
import re
from settings import sia

class Sentiment(Resource):

    @cross_origin()
    def post(self):
        try:

            # Read arguments
            payload = request.json
            hashtags = payload['hashtags']
            geocode = payload['geocode']
            until = payload['until']
            since = payload['since']
            count = payload['count'] + 100

            # Get tweets
            tweets = twitter_apis.get_tweets(hashtags, geocode, until, since, count)

            # Initialize scores
            sentiment_scores = {
                'pos': [],
                'neg': [],
                'neu': [],
                'compound': [],
                'weights': []
            }

            # Analyze tweets
            for tweet in tweets:

                # Get retweets
                retweet_count = tweet['retweet_count'] if 'retweet_count' in tweet.keys() else 0

                # Get correct text
                if 'retweeted_status' in tweet.keys():
                    text = re.sub(r'http\S+', '', tweet['retweeted_status']['full_text']).replace('\n', '')
                    retweet_count = tweet['retweeted_status']['retweet_count']
                else:
                    text = re.sub(r'http\S+', '', tweet['full_text']).replace('\n', '')

                # Sentiment Analysis
                polarity_scores = sia.polarity_scores(text)

                # Take into account retweets
                for _ in range(retweet_count + 1):
                    for tag in ['pos', 'neu', 'neg', 'compound']:
                        sentiment_scores[tag].append(polarity_scores[tag])
                    sentiment_scores['weights'].append(tweet['user']['followers_count'])

            # Find weighted arithmetic mean based on Followers
            final_scores = {}
            amount = sentiment_scores['weights']
            for tag in ['pos', 'neu', 'neg', 'compound']:
                rate = sentiment_scores[tag]
                final_scores[tag] = round(sum(rate[g] * amount[g] for g in range(len(rate))) / sum(amount), 4) - 0.25

            geocodes = [('US-WI', 44.5, -89.5, 172.5), ('US-WV', 39.0, -80.5, 105), ('US-VT', 44.0, -72.699997, 75), ('US-TX', 31.0, -100.0, 385), ('US-SD', 44.5, -100.0, 173), ('US-RI', 41.700001, -71.5, 25), ('US-OR', 44.0, -120.5, 220), ('US-NY', 43.0, -75.0, 160), ('US-NH', 44.0, -71.5, 81), ('US-NE', 41.5, -100.0, 200), ('US-KS', 38.5, -98.0, 200), ('US-MS', 33.0, -90.0, 112.5), ('US-IL', 40.0, -89.0, 176.5), ('US-DE', 39.0, -75.5, 40), ('US-CT', 41.599998, -72.699997, 45), ('US-AR', 34.799999, -92.199997, 127.5), ('US-IN', 40.273502, -86.126976, 125), ('US-MO', 38.573936, -92.60376, 140), ('US-FL', 27.994402, -81.760254, 265), ('US-NV', 39.876019, -117.224121, 235), ('US-ME', 45.367584, -68.972168, 150), ('US-MI', 44.182205, -84.506836, 225), ('US-GA', 33.247875, -83.441162, 157), ('US-HI', 19.741755, -155.844437, 200), ('US-AK', 66.160507, -153.369141, 700), ('US-TN', 35.860119, -86.660156, 185), ('US-VA', 37.926868, -78.024902, 185), ('US-NJ', 39.833851, -74.871826, 75), ('US-KY', 37.839333, -84.27002, 155), ('US-ND', 47.650589, -100.437012, 166), ('US-MN', 46.39241, -94.63623, 175), ('US-OK', 36.084621, -96.921387, 207.5), ('US-MT', 46.96526, -109.533691, 267.5), ('US-WA', 47.751076, -120.740135, 210), ('US-UT', 39.41922, -111.950684, 167.5), ('US-CO', 39.113014, -105.358887, 190), ('US-OH', 40.367474, -82.996216, 112.5), ('US-AL', 32.31823, -86.902298, 142.5), ('US-IA', 42.032974, -93.581543, 152.5), ('US-NM', 34.307144, -106.018066, 180), ('US-SC', 33.836082, -81.163727, 115), ('US-PA', 41.203323, -77.194527, 137.5), ('US-AZ', 34.048927, -111.093735, 197.5), ('US-MD', 39.045753, -76.641273, 102.5), ('US-MA', 42.407211, -71.382439, 77.5), ('US-CA', 36.778259, -119.417931, 350), ('US-ID', 44.068203, -114.742043, 240), ('US-WY', 43.07597, -107.290283, 177.5), ('US-NC', 35.782169, -80.793457, 210), ('US-LA', 30.39183, -92.329102, 177.5)]
            elements = geocode.split(',')
            latt = float(elements[0])
            long = float(elements[1])
            for x in geocodes:
                if x[1] == latt and x[2] == long:
                    final_scores['state_id'] = x[0]
                    final_scores['num_tweets'] = len(tweets)
                    return final_scores

            abort(400, "Invalid geocode.", statusCode=400)

        except ValueError:
            abort(400, "Unable to find Tweets with that parameters", statusCode=400)
