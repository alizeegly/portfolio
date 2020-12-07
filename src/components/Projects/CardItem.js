import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, Figure, BlocTitre, CardTitre, CardTags, CardTechnics } from './ProjectsElements'

function CardItem(props) {
  return (
    <>
        <Card>
            <Link className="card-link" to={props.path}>
                <Figure data-category={props.label}>
                    <CardImg alt='Travel Image' src={props.src} />
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Figure>
                <BlocTitre>
                    <CardTitre>{props.text}</CardTitre>
                    <CardTags>
                        { 
                            props.technics.map((item) => (
                                <CardTechnics>{item}</CardTechnics>
                            ))
                        }
                    </CardTags>
                </BlocTitre>
            </Link>
        </Card>
    </>
  );
}

export default CardItem;
