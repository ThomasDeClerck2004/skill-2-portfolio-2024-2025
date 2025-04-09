export default function Skill({ skillName }) {
    return (
        <div className="flex items-center text-gray-100 cursor-default font-semibold px-5 py-3 rounded-lg w-fit bg-[#009b5f] hover:-translate-y-2 transition duration-300 ease-in-out shadow-md shadow-primary">
            <span>{skillName}</span>
        </div>
    );
}