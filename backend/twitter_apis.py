import requests

# Search Twitter API
def search_tweets(hashtags: [str], geocode: str, until: str, since: str, max_id, limit=100, result_type='recent'):

    # hashtags_str = '%23' + '%23'.join([str(elem) for elem in hashtags])
    hashtags_str = ','.join([str(elem) for elem in hashtags])

    if max_id != '0':
        url = f"https://api.twitter.com/1.1/search/tweets.json?q={hashtags_str}&geocode={geocode}&count={str(limit)}&since={since}&max_id={max_id}&tweet_mode=extended"
    else:
        url = f"https://api.twitter.com/1.1/search/tweets.json?q={hashtags_str}&geocode={geocode}&count={str(limit)}&since={since}&tweet_mode=extended"

    payload = {}
    headers = {
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAO6vNwEAAAAAwS3xroXqwRd38rFmbyIFzyXM7n4%3DqgosbmVFApuTcheryNAdXWdRRipgVh9k7jSQRvcdLJU5mSs7MA'
    }

    response = requests.request("GET", url, headers=headers, data=payload).json()

    return response

# Function for paging more than 100 tweets
def get_tweets(hashtags, geocode, until, since, limit, result_type='recent'):

    final_tweets = []
    max_id = '0'
    max_followers = 0
    for _ in range(100, limit+1, 100):

        # Call the API
        tweets = search_tweets(hashtags, geocode, until, since, max_id)
        print(tweets)
        # Filter them
        statuses = tweets['statuses']

        if len(statuses) == 0 and len(hashtags) > 0:
            statuses = []
            for hashtag in hashtags:
                tweets = search_tweets([hashtag], geocode, until, since, max_id)
                statuses.extend(tweets['statuses'])

        for status in statuses:
            if status['metadata']['iso_language_code'] == 'en':
                final_tweets.append(status)
                max_followers = max(max_followers, status['user']['followers_count'])

        # Find the next 'max_id'
        ids = [status['id'] for status in statuses]
        max_id = str(min(ids))

    return final_tweets
