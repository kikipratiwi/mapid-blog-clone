import React from 'react';
import { 
  CompositeDecorator, 
  convertFromRaw, 
  Editor, 
  EditorState 
} from 'draft-js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useParams } from "react-router-dom";


import HeroTitle from '../../components/hero-title/hero-title.component';
import Author from '../../components/author/author.component';

import { selectCurrentBlog, selectDefaultBlog } from '../../redux/blog/blog.selectors'

import './content.styles.scss';

const Content = ({ defaultBlog, currentBlog, ...props }) => {

  const findLinkEntities = (contentBlock, callback, contentState) => {
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

  const compositeDecorator = new CompositeDecorator([{
    strategy: findLinkEntities,
    component: Content
  }]);

  const convertToEditorState = (editorContent) => {    
    const contentState = convertFromRaw(JSON.parse(editorContent.editorState));
    const editorState = EditorState.createWithContent(contentState, compositeDecorator);
    return editorState;
  };

  const defaultData = {
    defaultUserImageProfile: 'https://doc.mapid.io/static/media/profile_pic_comment.2a6f2a32.svg',
    defaultHeroImage: 'https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1601430916.png'
  }

  let { blogLink } = useParams();

  console.log("blog:"+blogLink)
  console.log(useParams())

  const editorState = convertToEditorState(currentBlog);

  return (
    <div className="mb-200">
      <HeroTitle 
        imageUrl={defaultData.defaultHeroImage} 
        title={currentBlog.title} />
      <div className="content-container">
        {currentBlog ? (
          <>
            <Author 
              imageUrl={currentBlog['authors']['0']['user'] ? (
                  currentBlog['authors']['0']['user']['profile_picture'].url
                ) : (
                  defaultData.defaultUserImageProfile
                )} 
              name={currentBlog['authors']['0']['user'] ? currentBlog['authors']['0']['user'].full_name : ''} 
              date={currentBlog.date}
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

const mapStateToProps = createStructuredSelector ({
  currentBlog: selectCurrentBlog,
  defaultBlog: selectDefaultBlog
})

export default connect(
  mapStateToProps
)(Content);
