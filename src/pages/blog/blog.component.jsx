import React from 'react';
import { Route } from 'react-router-dom';
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
  }

  async getBlogData() {
    try {
      const result = await this.mapidService.getBlogData();
      const defaultData = result[Object.keys(result)[0]];
      
      this.setState({ 
        blogData: result,
        defaultContent: defaultData
      });
    } catch (error) {
      console.error(error);
    }
  }

  setContent(data) {
    console.log(data);
    this.setState({ ...this.state, defaultContent: data });
    this.props.location.pathname = this.state.defaultContent.link
  }

  render() {
    return (
      <div className='blog-page'>
        {console.log(this.props.currentBlog)}
        <SideBar blogCollection={this.state.blogData} />
        {this.state.blogData ? (
          <Route 
            path='/blog/:blogLink' 
            render={(props) => (
              <Content {...props} contentData={this.props.currentBlog ? this.props.currentBlog : this.state.defaultContent} />
            )}
          />
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
