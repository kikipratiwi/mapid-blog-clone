import React from 'react';

import HeroTitle from '../../components/hero-title/hero-title.component';
import Author from '../../components/author/author.component';

import './content.styles.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultUserImageProfile: 'https://doc.mapid.io/static/media/profile_pic_comment.2a6f2a32.svg'
    }
  }

  render() {
    const contentData = this.props.contentData;
    return (
      <div className="mb-200">
        <HeroTitle 
          imageUrl={'https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1598604952.jpeg'} 
          title={this.props.contentData.title} />
        <div className="content-container">
          {this.props.contentData ? (
            <>
              <Author 
                imageUrl={contentData['authors']['0']['user'] ? (
                    contentData['authors']['0']['user']['profile_picture'].url
                  ) : (
                    this.state.defaultUserImageProfile
                  )} 
                name={contentData['authors']['0']['user'] ? contentData['authors']['0']['user'].full_name : ''} 
                date={contentData.date}
              />
              <div className="content">
                <p>{contentData.editorState}</p>
              </div>
            </>
          ) : (
            null
          )}
        </div>
      </div>
    );
  }
}

export default Content;