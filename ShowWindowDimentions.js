import useWindowDimensions from './GetWindowDimentions';
const ShowWindowDimentions = () => {
    const { height, width } = useWindowDimensions();
  
    return (
      <div>
        width: {width} ~ height: {height}
      </div>
    );
  }

  export default ShowWindowDimentions;