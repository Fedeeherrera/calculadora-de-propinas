import { formatCurrency } from '../helpers'
import type { OrderItem } from '../types'
import { useMemo } from 'react'

type OrderTotalsProps = {
  order: OrderItem[]
}

const OrderTotal = ({ order }: OrderTotalsProps) => {
  const subtotalAmmount = useMemo(
    () => order.reduce((total, item) => total + (item.quantity * item.price), 0),
    [order]
  )

  return (
    <>
      <div className="space-y-3">
        <h2 className="fonts-black text-2xl">Totales y propina:</h2>
        <p>
          Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmmount)}</span>
        </p>
        <p>
          Propina: <span className="font-bold"> $0</span>
        </p>
        <p>
          Total a pagar: <span className="font-bold"> $0</span>
        </p>
      </div>
      <button> </button>
    </>
  )
}

export default OrderTotal
