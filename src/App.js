import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/Cart';
import DefaultProduct from './components/DefaultProduct';
import PopUp from './components/PopUp';
import userService from '../src/components/utils/userService';
import reviewEntry from '../src/components//utils/reviewEntry';
import ReviewForm from '../src/components/ReviewForm/ReviewForm';
import ShowReviewId from './components/ReviewsList/showReviewId';
import ReviewsList from '../src/components/ReviewsList/ReviewsList';
import ReviewEditForm from '../src/components/ReviewEditForm/ReviewEditForm';
import SignupPage from '../src/components/pages/SignupPage/SignupPage';
import LoginPage from '../src/components/pages/LoginPage/LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      reviews: [],
      reviewsToEdit: null,
    };
  }

handleRemoveReview = async id => {
    const reviews = await reviewEntry.removeReview(id);
    this.props.history.push('/')
    this.setState({ reviews });
  } 


handleAddReview = async (review, id) => {
    const reviews = await reviewEntry.createReview(review, id)
    console.log(reviews)
    this.setState({ reviews });
  }


handleEditReview = async (id, data) => {
    const reviews = await reviewEntry.updateReview(id, data);
    console.log(reviews)
    this.setState({ reviews, reviewToEdit: null });
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser() });
}


async componentDidMount() {
  const reviews = await reviewEntry.getReviews()
  this.setState({reviews});
}


render() {
  return (
    <React.Fragment>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path='/details' component={ProductDetails}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/' component={ProductList}/>
          <Route exact path='/reviews/:id/edit' render={(props) =>
          <ReviewEditForm  
            {...props}
            user={this.state.user}
            reviewToEdit={this.state.reviewToEdit}
            handleEdit={this.handleEdit}
            handleEditReview={this.handleEditReview}
            reviews={this.state.reviews} 
            review={this.state.reviews.find(review => review._id === props.match.params.id)}/>
            }/>
            <Route exact path='/reviews/:id' render={(props) =>
            <ShowReviewId
            {...props}
            user={this.state.user}
            reviewToEdit={this.state.reviewToEdit}
            handleRemoveReview={this.handleRemoveReview}
            handleEdit={this.handleEdit}
            reviews={this.state.reviews} 
            handleEditReview={this.handleEditReview}
            review={this.state.reviews.find(review => review._id === props.match.params.id)}/>
            }/>
            <Route exact path='/reviews' render={(props) => 
            <ReviewsList {...props}
            reviews={this.state.reviews}
            />
            }/>
            <Route exact path='/signup' render={ (props) =>
              userService.getUser() ?
                <Redirect to='/' />
              :
                <SignupPage
                  {...props}
                  history={props.history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }/>
            <Route exact path='/login' render={ (props) => 
              userService.getUser() ?
                <Redirect to='/' />
              :
                <LoginPage
                  {...props}
                  history={props.history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }/>

<Route exact path='/reviewForm' render={(props) => 
                userService.getUser() ? 
                <ReviewForm {...props}
                user={this.state.user}
                handleAddReview={this.handleAddReview}
                reviewToEdit={this.reviewToEdit}
                handleEditReview={this.handleEditReview} 
                reviews={this.state.reviews} 
                />
                :
                <Redirect to='login' />
            }/>
            <Route exact path='/reviewForm' render={(props) => 
                userService.getUser() ? 
                <ReviewForm {...props}
                user={this.state.user}
                handleAddReview={this.handleAddReview}
                reviewToEdit={this.reviewToEdit}
                handleEditReview={this.handleEditReview} 
                reviews={this.state.reviews} 
                />
                :
                <Redirect to='login' />
            }/>

          <Route component={DefaultProduct}/>
        </Switch>
          <PopUp />
      </React.Fragment>
    );
  }
}

export default App;
