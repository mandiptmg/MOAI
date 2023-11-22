import office from '../../assets/office.svg'

const Office = () => {
  return (
    <div>
      {/* <div className='max-w-[300px]'>
        <h1 className='text-4xl font-serif font-bold text-slate-950 capitalize '>
          our office
        </h1>
        <p>
          A Place where People, Passion and Purpose Converge to create
          Exceptional Results
        </p>
      </div>
      <table>
       <tr>
        <td className='uppercase tex-xl'>write us</td>
        <td></td>
       </tr>
      </table> */}
      <img src={office} alt="" className='w-[420px]' />
    </div>
  )
}

export default Office