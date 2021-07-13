export default function Icons({ icon }) {
    switch (icon) {
        case 'profile':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke="fff"
                    />
                </svg>
            )
        case 'login':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white current-color"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            )
        default:
    }
    return icon
}
