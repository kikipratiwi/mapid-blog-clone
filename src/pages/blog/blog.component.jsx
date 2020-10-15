import React from 'react';

//Load components
import SideBar from '../../components/sidebar/sidebar.component';
import HeroTitle from '../../components/hero-title/hero-title.component';

//Load services
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
        <SideBar blogCollection={this.state.blogData} />
        <HeroTitle/>
        
      </div>
    );
  }
}

export default BlogPage;
