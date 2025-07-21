import ScrollVelocity from "../../components/scrollv/scrollv";

function Text() {
    return (
      <div className='m-0 p-0'>
        <div>
        <ScrollVelocity
        texts={['KNOW ME MORE ✽ ', 'KNOW ME MORE ✽ ']} 
        className="custom-scroll-text text-white text-italic"
        />
        </div>
      </div>
    );
  }
  
export default Text;