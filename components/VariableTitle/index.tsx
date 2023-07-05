import { StyledTitle, StyledTitleWord, StyledTitleLetter } from './styles'

type VariableTitleProps = {
  text: string
}

export default function VariableTitle({ text }: VariableTitleProps) {
  return (
    <StyledTitle>
      <StyledTitleWord>
        {!!text &&
          [...text].map((letter, index) => (
            <StyledTitleLetter key={`${letter} ${index}`}>
              {letter}
            </StyledTitleLetter>
          ))}
      </StyledTitleWord>
    </StyledTitle>
  )
}
