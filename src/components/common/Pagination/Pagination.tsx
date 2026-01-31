import {Link }from 'gatsby';
import React from 'react';

const Pagination: React.FC = () => {
    return (
        <ul
                  className='post-pagination justify-content-center'
                  data-wow-duration='1500ms'
                  data-wow-delay='500ms'
                >
                  <li>
                    <Link to='#' className='previous'>
                      Previous
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>1</Link>
                  </li>
                  <li>
                    <Link to='#'>2</Link>
                  </li>
                  <li>
                    <Link to='#'>3</Link>
                  </li>
                  <li>
                    <Link to='#'>...</Link>
                  </li>
                  <li className='active'>
                    <Link to='#' className='next'>
                      Next
                    </Link>
                  </li>
                </ul>
    );
};

export default Pagination;