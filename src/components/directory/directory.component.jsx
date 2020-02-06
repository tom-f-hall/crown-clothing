import React from 'react'

import './directory.style.scss'

import MenuItem from '../menu-item/menu-item.component'


class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  //imageUrl: 'https://randomfox.ca/images/42.jpg',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  //imageUrl: 'https://randomfox.ca/images/34.jpg',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  //imageUrl: 'https://randomfox.ca/images/25.jpg',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  //imageUrl: 'https://randomfox.ca/images/19.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  //imageUrl: 'https://randomfox.ca/images/3.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
            ] 
        }
    }

    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            </div>
        )
    }
}

export default Directory