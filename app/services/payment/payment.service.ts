import { axiosInstance } from "@/app/api/api.interceptor"

class PaymentService {
    private PAYMENT = 'payment'

    async createPayment(amount: number) {
        return axiosInstance.post(this.PAYMENT, { amount })
    }
}

export default new PaymentService()