import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Load components
import SideBar from '../../components/sidebar/sidebar.component';
import Content from '../../components/content/content.component';

import { selectCurrentBlog } from '../../redux/blog/blog.selectors'

//Load services
import MapidService from '../../services/mapid-service';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.mapidService = new MapidService();
    this.state = {
      blogData: null, 
      defaultContent: null
    };
  }

  async componentDidMount () {
    await this.getBlogData();
    this.initDefaultStyle();
  }

  async getBlogData() {
    try {
      const result = await this.mapidService.getBlogData();
      const _defaultData = result[Object.keys(result)[0]];
      const defaultData =  _defaultData[Object.keys(_defaultData)[0]];

      this.setState({ 
        blogData: result,
        defaultContent: defaultData
      });

    } catch (error) {
      console.error(error);
    }
  }

initDefaultStyle() {
  document.title = this.state.defaultContent.title;
}

  render() {
    return (
      <div className='blog-page'>
        <SideBar blogCollection={this.state.blogData} />
        {this.state.blogData ? (
          <Switch>
            <Route 
              path='/' 
              render={(props) => (
                <Content {...props} contentData={this.props.currentBlog ? this.props.currentBlog : this.state.defaultContent} />
              )}
            />
          </Switch>
        ) : (
          null
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentBlog: selectCurrentBlog
})

export default connect(mapStateToProps)(BlogPage);
