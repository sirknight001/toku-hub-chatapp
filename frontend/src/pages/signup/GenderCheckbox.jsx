const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex justify-center items-center gap-6 mt-4">
			<label className={`flex items-center gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `} >
				<span className="text-[#bfc7dc] font-semibold">Male</span>
				<input
					type="checkbox"
					className="checkbox checkbox-sm border-white/50 bg-transparent"
					checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")}
				/>
			</label>

			<label className={`flex items-center gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
				<span className="text-[#bfc7dc] font-semibold">Female</span>
				<input
					type="checkbox"
					className="checkbox checkbox-sm border-white/50 bg-transparent"
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")}
				/>
			</label>
		</div>
	);
};

export default GenderCheckbox;

// STARTER CODE FOR GENDER CHECKBOX COMPONENT
// const GenderCheckbox = () => {
// 	return (
// 		<div className="flex justify-center items-center gap-6 mt-4">
// 			<label className="flex items-center gap-2 cursor-pointer">
// 				<span className="text-[#bfc7dc] font-semibold">Male</span>
// 				<input
// 					type="checkbox"
// 					className="checkbox checkbox-sm border-white/50 bg-transparent"
// 				/>
// 			</label>

// 			<label className="flex items-center gap-2 cursor-pointer">
// 				<span className="text-[#bfc7dc] font-semibold">Female</span>
// 				<input
// 					type="checkbox"
// 					className="checkbox checkbox-sm border-white/50 bg-transparent"
// 				/>
// 			</label>
// 		</div>
// 	);
// };

// export default GenderCheckbox;