import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  data: state.data,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  addJoke: () => {
    dispatch({
      type: 'addJoke',
    });

    dispatch({
      type: 'status_fetching',
    })
  },
});

export default component => connect(mapStateToProps, mapDispatchToProps)(component);
