export default function Skill({ skillName }) {
    return (
        <p className="text-gray-100 cursor-default font-semibold px-5 py-3 rounded-lg w-fit bg-[#009b5f] hover:-translate-y-2 transition duration-300 ease-in-out shadow-md shadow-primary">
            {skillName}
        </p>
    );
}