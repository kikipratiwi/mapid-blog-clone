import React from 'react';
import { Route } from 'react-router-dom';

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
        {console.log(this.props)}
        <SideBar blogCollection={this.state.blogData} setContent={this.setContent} />
        {this.state.blogData ? (
          <Route 
            path='/blog/:blogLink' 
            render={(props) => (
              <Content {...props} contentData={this.state.defaultContent} />
            )}
          />
        ) : (
          null
        )}
      </div>
    );
  }
}

export default BlogPage;
