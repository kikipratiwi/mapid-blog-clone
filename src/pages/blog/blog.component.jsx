import React from 'react';

//Load components
import SideBar from '../../components/sidebar/sidebar.component';
import Content from '../../components/content/content.component';

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
      this.setState({ blogData: result });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className='blog-page'>
        <SideBar blogCollection={this.state.blogData} />
        {this.state.blogData ? (
          <Content contentData={this.state.blogData['teknis_kompetisi_mapid']['5f73de7298e0814830293cc6']} />
        ) : (
          null
        )}
      </div>
    );
  }
}

export default BlogPage;
