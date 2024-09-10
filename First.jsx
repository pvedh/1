import './First.css'
function First() {
  let employees=[{id:1,name:'Ravi',salary:45000},
    {id:2,name:'Vikas',salary:50000},
    {id:3,name:'Manasa',salary:40000},
    {id:4,name:'Vijay',salary:75000},
    {id:5,name:'Disha',salary:36000},
    {id:6,name:'Shiva',salary:100000},
    {id:7,name:'Hari',salary:35000},
    {id:8,name:'Kiran',salary:55000},
    {id:9,name:'Rajesh',salary:60000},
    {id:10,name:'Koushik',salary:48000},
    {id:11,name:'Shashank',salary:32000},
    {id:12,name:'Charan',salary:30000}]

  return (
    <div className="main">
      <h1 className='p-2 m-2 text-center text-success'>Employees Data</h1>
      <table className="table w-75 mx-auto text-center mt-5 table-dark table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    </thead>
    
       { employees.map((empObj)=><tbody key={empObj.sid}>
           <tr><td>{empObj.id}</td><td>{empObj.name}</td><td>{empObj.salary}</td></tr> 
        </tbody>)}
</table>
     
    </div>
  );
}
export default First;