import type { Dispatch, SetStateAction } from 'react'

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
]

type TipPercentajeFormProps = {
  setTip: Dispatch<SetStateAction<number>>
}

const TipPercentajeForm = ({ setTip }: TipPercentajeFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>
      <form>
        {tipOptions.map((tip) => (
          <div className="flex gap-2" key={tip.id}>
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              onChange={(event) => setTip(+event.target.value)}
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default TipPercentajeForm
