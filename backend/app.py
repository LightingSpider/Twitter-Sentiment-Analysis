import settings
app = settings.init()

from resources import Sentiment

settings.api.add_resource(Sentiment, '/sentiment')

# We only need this for local development.
if __name__ == '__main__':
    app.run(debug=True)