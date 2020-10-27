import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "./../../component/collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className={"preview"}>
				{items
					.filter((_, idx) => idx < 4)
					.map(({ id, ...rest }) => {
						return <CollectionItem key={id} {...rest} />;
					})}
			</div>
		</div>
	);
};

export default CollectionPreview;
