import React, { Component } from 'react';
import PostList from './PostList';

const AllPosts = PostList.filter((post) => !post.hide).reverse();
const postCount = AllPosts.length;

let scrollTO = null;

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      display: 1
    };
  }
  resolveInstagram() {
  	const script = document.createElement('script')
    script.setAttribute('src', '//platform.instagram.com/en_US/embeds.js');
		document.body.appendChild(script);
  }

  componentDidMount() {
  	this.resolveInstagram();

    window.onscroll = (ev) => {
        console.log('scrolling');
        if ((window.innerHeight + window.scrollY) >= window.document.body.offsetHeight - 1) {
            console.log('hit scroll bottom');
            if (this.state.display >= postCount) {
              return;
            }
            scrollTO = setTimeout(() => {

              this.setState({
                display: this.state.display + 1
              });

            }, 700);
        }
    };
  }
  render() {
    return (
      <div>
        {
          AllPosts.map((post, index) => {
            let postNum = postCount - index;
            postNum = ("00" + postNum).slice(-3);
            let displayVal = (index >= this.state.display) ? 'none' : 'block';
            return (
              <div key={index} className="post" style={{ display: displayVal }}>
                <h2>{ `#${postNum}: ${post.title}` }</h2>
                <i>{post.date}</i>
                <div className="content" dangerouslySetInnerHTML={{__html: post.html}} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Posts;
