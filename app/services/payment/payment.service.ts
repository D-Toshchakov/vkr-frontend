import { axiosInstance } from "@/app/api/api.interceptor"

export class PaymentService {
    PAYMENT = 'payment'

    async createPayment(amount: number) {
        return axiosInstance.post(this.PAYMENT, { amount })
    }
}