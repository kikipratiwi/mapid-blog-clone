import React from 'react';

import MapidService from '../../services/mapid-service';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.mapidService = new MapidService();
    this.state = {
      blogData: null
    };
  }

  async componentDidMount () {
    await this.getBlogData();
  }

  async getBlogData() {
    try {
      const result = await this.mapidService.getBlogData();
      this.setState({blogData: result});
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className='blog-page'>
        {console.log(this.state.blogData)}
      </div>
    );
  }
}

export default BlogPage;
