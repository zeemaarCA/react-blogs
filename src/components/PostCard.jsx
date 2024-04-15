import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
	const trimmer = content.substring(0, 150);
	return (
		<>
			<Link to={`/post/${$id}`}>
				<div className="relative h-[400px] w-[300px] rounded-md">
					<img
						src={appwriteService.getFilePreview(featuredImage)}
						alt={title}
						className="z-0 h-full w-full rounded-md object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
					<div className="absolute bottom-4 left-4 text-left p-1">
						<h1 className="text-lg font-semibold text-white">{title}</h1>
						<div className="mt-2 text-sm text-gray-300">
							{parse(trimmer)}
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}

export default PostCard;
