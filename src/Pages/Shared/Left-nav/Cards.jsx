import React from 'react';

const Cards = ({item}) => {
    const {thumbnail_url,published_date, title,_id} = item
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
				
					<img
						src={thumbnail_url}
                        className='w-full h-[200px]'
                        
						alt="Shoes"
					/>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<div className="card-actions ">
						<p className="">{published_date}</p>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Cards;