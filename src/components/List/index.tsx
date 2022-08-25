import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  listTitle: string, 
  listItems:any, 
  itemType:any, 
  moreInfoPath:string
}

export default function List({ listTitle, listItems, itemType, moreInfoPath }: Props) {
  return (
    <div className="list">
      <div className="list-title">
        <h5>{listTitle}</h5> <Link to={moreInfoPath}>More Info</Link>
      </div>
      <ul>
        {listItems.map((item:any) => {
          return (
            <li>
              <img src={item.image_url} alt={item.title} />
              <div className="info">
                <Link to={`${itemType}/:id}`}>{item.title}</Link>
                <div className="mini-info">
                  <span>
                    Type:
                    {item.type}
                  </span>
                  <span>
                    Episodes:
                    {typeof item.episodes == 'number' ? item.episodes : 'N/A'}
                  </span>
                  <span>
                    Score:
                    {item.score}
                  </span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
