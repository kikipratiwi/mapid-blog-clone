import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDefaultBlog, selectBlogData, selectCurrentBlog } from '../../redux/blog/blog.selectors'
import { setBlogData, setDefaultBlog, setCurrentBlog } from '../../redux/blog/blog.actions'

//Load components
import SideBar from '../../components/sidebar/sidebar.component';
import Content from '../../components/content/content.component';

//Load services
import MapidService from '../../services/mapid-service';
class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.mapidService = new MapidService();
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

      await this.props.setBlogData(result);
      await this.props.setDefaultBlog(defaultData);
      await this.props.setCurrentBlog(defaultData);

    } catch (error) {
      console.error(error);
    }
  }

initDefaultStyle() {
  if (this.props.defaultBlog)
    document.title = this.props.defaultBlog.title;
}

  render() {
    return (
      <div className='blog-page'>
        {this.props.currentBlog ? <SideBar blogCollection={this.props.blogData} /> : null }
        {this.props.blogData ? <Content /> : null }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  blogData: selectBlogData,
  defaultBlog: selectDefaultBlog,
  currentBlog: selectCurrentBlog
})

const mapDispatchToProps = dispatch => ({
  setBlogData: item => dispatch(setBlogData(item)),
  setDefaultBlog: item => dispatch(setDefaultBlog(item)),
  setCurrentBlog: item => dispatch(setCurrentBlog(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);
