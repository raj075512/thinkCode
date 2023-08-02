// import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
// import Topbar from "@/components/Topbar/Topbar";
// import Topbar from ""
import Navbar from "./components/Navbar";
import ProblemsTable from "./components/ProblemTable/ProblemsTable";
import Topbar from "./components/Topbar";
// import useHasMounted from "@/hooks/useHasMounted";

import { useState } from "react";

export default function Home() {
	const [loadingProblems, setLoadingProblems] = useState(true);
	

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Navbar />
				<h1
					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'
				>
					 QUALITY OVER QUANTITY  👇
				</h1>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10 '>
					
					<table className='text-sm text-left text-gray-500 border-3 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr >
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									
								</tr>
							</thead>
							
							<ProblemsTable/>
					</table>
					
					
				</div>
			</main>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};