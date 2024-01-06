import { Tooltip } from '@chakra-ui/react'
import { IconButton } from '@opengovsg/design-system-react'
import { useState, type MouseEventHandler, useEffect } from 'react'
import { BiRecycle } from 'react-icons/bi'
import { trpc } from '~/utils/trpc'

interface RetweetActionProps {
  postId: string
}

export const RetweetAction = ({ postId }: RetweetActionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const retweet = trpc.post.addRetweet.useMutation()
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [isOpen])

  const handleRetweetLink: MouseEventHandler = async () => {
    await retweet.mutate({
      retweetId: postId,
    })
  }
  //additional functions to implement like handling whether or not we are allowed to retweet again and error handling or wtv

  return (
    <Tooltip label="Retweeted!" hasArrow isOpen={isOpen}>
      <IconButton
        onMouseLeave={() => setIsOpen(false)}
        data-value="post-action"
        aria-label="Link to post"
        icon={<BiRecycle fontSize="1.25rem" />}
        onClick={handleRetweetLink}
      />
    </Tooltip>
  )
}
