import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipesList from './RecipesList';
import '../App.css';
import NavBar from '../components/NavBar';
import RecipeDetails from '../components/RecipeDetails';
import { updateFilter } from '../actions/index';

const App = ({ handleFilterUpdate, filter }) => (
  <div>
    <NavBar updateFilter={handleFilterUpdate} filter={filter} />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route path="/show/:id" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  </div>
);

const mapStateToProps = state => ({ filter: state.filter });

const mapDispatchToProps = dispatch => ({
  handleFilterUpdate: filter => {
    dispatch(updateFilter(filter));
  },
});

App.propTypes = {
  handleFilterUpdate: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
