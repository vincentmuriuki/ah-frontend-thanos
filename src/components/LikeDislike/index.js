import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp, faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import './likedislike.scss';

library.add(faThumbsUp, faThumbsDown);

const createButton = (onClick, icon, cssClass, likeDislikeCount, id) => (
  <React.Fragment key={id}>
    <button type="button" id={id} onClick={onClick} className="thumbs mr-2"><FontAwesomeIcon icon={icon} /></button>
    <span className={cssClass}>{(likeDislikeCount >= 0) ? likeDislikeCount : 0}</span>
  </React.Fragment>
);

const LikeDislike = ({
  onLikeDislike, likes, dislikes,
}) => {
  const buttons = [
    {
      onClick: (() => { onLikeDislike('like'); }),
      icon: 'thumbs-up',
      cssClass: 'mr-4',
      likeDislikeCount: likes,
      id: 'bt-like',
    },
    {
      onClick: (() => { onLikeDislike('dislike'); }),
      icon: 'thumbs-down',
      cssClass: '',
      likeDislikeCount: dislikes,
      id: 'bt-dislike',
    },
  ];
  return (
    <div className="article-like-dislike">
      <form>
        {buttons.map(
          bt => createButton(bt.onClick, bt.icon, bt.cssClass, bt.likeDislikeCount, bt.id),
        )}
      </form>
    </div>
  );
};

LikeDislike.propTypes = {
  onLikeDislike: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default LikeDislike;
