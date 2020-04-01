import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import userPostMiddleware from './middleware/userPostMiddleware';


function App(props) {
  
  return (
    <div className="App">
      <h2>Redux, Middleware and thunk</h2>
      <button onClick={props.fetchUserPost}>Fetch Post Data</button>
      {
        
         props.posts.map((post, id) => <p key={id}>{post.id} - {post.title}</p>)
        
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoadding: state.isLoadding,
  errorMessage: state.errorMessage,
  posts: state.posts
    
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserPost: ()=>{dispatch(userPostMiddleware())}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
