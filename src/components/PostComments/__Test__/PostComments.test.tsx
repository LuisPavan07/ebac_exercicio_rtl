import { fireEvent, render, screen } from '@testing-library/react'
import Post from '..'
import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve adicionar dois comentários corretamente', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('comment-textarea'), {target: {value: 'primeiro comentário enviado'}})
        fireEvent.click(screen.getByTestId('comment-button'))

        fireEvent.change(screen.getByTestId('comment-textarea'), {target: {value: 'segundo comentário enviado',}})
        fireEvent.click(screen.getByTestId('comment-button'))

        expect(screen.getAllByTestId('post-comment')).toHaveLength(2)
    })
})