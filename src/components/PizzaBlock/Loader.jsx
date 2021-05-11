import React from 'react'
import ContentLoader from 'react-content-loader';

function Loader() {
    return (
        <ContentLoader 
            className={'pizza-block'}
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#e8e8e8"
            >
            <circle cx="132" cy="140" r="115" /> 
            <rect x="0" y="273" rx="6" ry="6" width="280" height="26" /> 
            <rect x="0" y="310" rx="6" ry="6" width="280" height="80" /> 
            <rect x="0" y="418" rx="6" ry="6" width="91" height="31" /> 
            <rect x="140" y="408" rx="25" ry="25" width="140" height="45" />
        </ContentLoader>
   )
}

export default Loader
