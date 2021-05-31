import { Divider, Layout, Progress, Spin, Row, Col, Badge, Typography } from 'antd';

import { UsMap } from './components/us-map';
import './App.css';
import SearchBar from './components/search-bar';
import { useState } from 'react';
import { fetchSentiment, Sentiment } from './api/request';



function App() {
  const { Header, Content, Footer } = Layout;
  const [state, setState] = useState({
    progress: 0, loading: false, response: new Array<Sentiment>()
  });

  const [details, setDetails] = useState<Record<string, number>>();

  const antIcon = <Progress percent={state.progress} type="circle"
    strokeColor={{
      '0%': '#108ee9',
      '100%': '#87d068',
    }} />;

  function progressPromise(promises: Array<Promise<Response>>) {
    const len = promises.length;
    let progress = 0;

    function tick(promise: Promise<Response>) {
      promise.then(function () {
        progress++;
        update(progress, len);
      });
      return promise;
    }

    return Promise.all(promises.map(tick));
  }



  function update(completed: number, total: number) {
    const progress = Math.round(completed / total * 100);
    setState({
      progress, loading: true, response: []
    })
  }

  const search = async (values: any) => {
    setState({
      progress: 0, loading: true, response: []
    })
    const res = fetchSentiment(values.hashtags, values.date[0].format("YYYY-MM-DD"), values.date[1].format("YYYY-MM-DD"))
    const sentiments = await progressPromise(res)
    let response = sentiments.map(x => x.json())
    Promise.all(response).then(r => {

      setState({
        progress: 0, loading: false, response: r
      })
    }).catch()
  };


  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <SearchBar search={search} />
          <Divider />
          <Spin indicator={antIcon} spinning={state.loading}>
            {
              state.response.length > 0 && <Row>
                <Col md={17}>
                  <UsMap sentiment={[...state.response]}
                    showDetails={(val) => {

                      setDetails(val)
                    }}

                    hideDetails={() => setDetails(undefined)}
                  />


                </Col>

                <Col md={4} style={{ display: "flex", }}>
                  <div style={{ alignSelf: 'flex-end' }}>
                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                      <Typography.Text strong>Negative</Typography.Text>
                      <Typography.Text strong>Positive</Typography.Text>
                    </div>
                    <Progress
                      strokeColor={{
                        '0%': '#ff4d4f',
                        '50%': '#fffc00',
                        '100%': '#87d068',
                      }}
                      percent={100}
                      status={undefined}
                    />

                    <div style={{ marginTop: '20px' }}>

                      <Typography.Title level={5}>
                        Notes
                      </Typography.Title>
                      <p> <i>Compound:</i> {`It is an aggregated score of all the other metrics. (This number is plotted on the heatmap)`}</p>
                      <p> <i>Negative:</i> {`Number shows how negative are the analyzed Tweets.`}</p>
                      <p> <i>Neutral:</i> {`Number shows how neutral are the analyzed Tweets.`}</p>
                      <p> <i>Positive:</i> {`Number shows how positive are the analyzed Tweets.`}</p>
                      <p> <i>Number of Tweets:</i> {`How many Tweets have been analyzed in order to calculate these numbers.`}</p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div>
                    {
                      details && (
                        <div>
                          <Typography.Title level={4}>{details.stateName}</Typography.Title>
                          <p> {`Compound: ${details.compound}`}</p>
                          <p> {`Negative: ${details.neg}`}</p>
                          <p> {`Neutral: ${details.neu}`}</p>
                          <p> {`Positive: ${details.pos}`}</p>
                          <p> {`Number of Tweets: ${details.num_tweets}`}</p>
                        </div>)
                    }
                  </div>
                </Col>
              </Row>

            }
          </Spin>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>US Heat Map ©2021</Footer>
    </Layout>
  );
}

export default App;
