import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import { Container, PostCard } from "../components";

function Home() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		authService.isLoggedIn().then((loggedIn) => {
			setIsLoggedIn(loggedIn);
		});
	}, [isLoggedIn]);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		appwriteService.getPosts([]).then((posts) => {
			if (posts) {
				setPosts(posts.documents);
			}
		});
	}, []);

	return (
		<div className="w-full py-8">
			<Container>
				<div className="flex flex-wrap">
					{isLoggedIn ? (
						posts.length > 0 ? (
							posts.map((post) => (
								<div key={post.$id} className="p-2">
									<PostCard {...post} />
								</div>
							))
						) : (
							<p>No posts available to view.</p>
						)
					) : (
						<p>Please log in to view this content.</p>
					)}
				</div>
			</Container>
		</div>
	);
}

export default Home;
