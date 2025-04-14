import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

const Header = dynamic(import('../WhiteHeader'));
const Footer = dynamic(import('../Footer'));

export default function BaseLayout(props) {
  const { children } = props;

  return (
    <>
      <div className="wrapperr">
        <Header />
          <div className="content">{children} </div>
        <Footer />
      </div>
    </>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.object,
};
