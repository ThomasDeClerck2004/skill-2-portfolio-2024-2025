export default function Hobby({ hobbyName }) {
    return (
        <div className="pl-[3px] rounded-lg bg-gradient-to-b from-[#005635] to-[#00ff99] hover:-translate-y-2 transition duration-300 ease-in-out shadow-md shadow-primary">
            <div className="text-gray-100 bg-gray-800 cursor-default font-semibold px-6 py-4 rounded-lg flex items-center justify-center" style={{ width: "300px", height: "150px" }}>
                <span className="font-semibold text-2xl">{hobbyName}</span>
            </div>
        </div>
    );
}
