export default function Skill({ skillName, skillIcon }) {
    return (
        <div className="flex items-center text-gray-100 cursor-default font-semibold px-5 py-3 rounded-lg w-fit bg-[#009b5f] hover:-translate-y-2 transition duration-300 ease-in-out shadow-md shadow-primary">
            <img src={skillIcon} alt={skillName} className="w-6 h-6 mr-2" />
            <span>{skillName}</span>
        </div>
    );
}