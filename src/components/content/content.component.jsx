import React from 'react';
import { CompositeDecorator, convertFromRaw, Editor, EditorState } from 'draft-js';

import HeroTitle from '../../components/hero-title/hero-title.component';
import Author from '../../components/author/author.component';

import './content.styles.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultUserImageProfile: 'https://doc.mapid.io/static/media/profile_pic_comment.2a6f2a32.svg',
      defaultHeroImage: 'https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1601430916.png'
    }
  }

  findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === 'LINK'
        );
      },
      callback
    );
  }

  compositeDecorator = new CompositeDecorator([{
    strategy: this.findLinkEntities,
    component: Content
  }]);

  convertToEditorState = (editorContent) => {    
    const contentState = convertFromRaw(JSON.parse(editorContent.editorState));
    const editorState = EditorState.createWithContent(contentState, this.compositeDecorator);
    return editorState;
  };

  render() {
    const contentData = this.props.contentData;
    const editorState = this.convertToEditorState(contentData);

    return (
      <div className="mb-200">
        <HeroTitle 
          imageUrl={this.state.defaultHeroImage} 
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
                <Editor editorState={editorState} readOnly={true} />
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
