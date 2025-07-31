
import FuzzyText from "./Fuzzy404"

const NotFound = () => {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        {/* Fuzzy 404 Text */}
        <div className="mb-8">
          <FuzzyText 
            fontSize="clamp(4rem, 15vw, 20rem)"
            color="#FFFFFF"
            baseIntensity={0.3}
            hoverIntensity={0.7} 
            enableHover={true}
            fontWeight={900}
          >
            404
          </FuzzyText>
        </div>
    </div>
    </div>
  )
}

export default NotFound