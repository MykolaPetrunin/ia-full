export default async function Portfolio() {
  return (
    <div>
      <div className="bg-amber-500 flex" style={{ width: '1000px' }}>
          <div style={{ flex: '3 0 50px', height: '70px' }} className="bg-blue-800"/>
          <div  className="bg-pink-300" style={{ flex: '1 0 70px', height: '70px' }}/>
          <div style={{ flex: '2 1 50px', height: '70px' }} className="bg-emerald-500"/>
      </div>
    </div>
  );
}
