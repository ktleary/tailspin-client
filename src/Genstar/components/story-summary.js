import styled from "styled-components";
import { ExpandIcon, SendIcon } from "./buttons/icons";

const Row = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 4px 4px 4px 12px;
`;

const Summary = styled.div`
  color: rgba(255, 255, 255, 0.87);
  flex: 1;
  font-family: OpenSans, sans-serif;
  font-size: 16px;
  letter-spacing: -0.4px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ThemeBit = styled.span`
  color: rgba(255, 255, 255, 0.87);
  font-weight: 700;
`;

const SettingBit = styled.span`
  color: rgba(255, 255, 255, 0.66);
`;

const Buttons = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 4px;
`;

const IconButton = styled.button`
  align-items: center;
  background: #212121;
  border: 1px solid rgba(23, 23, 24, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  display: flex;
  fill: rgba(255, 255, 255, 0.76);
  height: 32px;
  justify-content: center;
  outline: 0;
  width: 32px;
  &:hover {
    background: #313131;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 1);
    fill: rgba(255, 255, 255, 1);
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const SummaryExpandIcon = styled(ExpandIcon)`
  height: 24px;
  width: 24px;
`;

const SummarySendIcon = styled(SendIcon)`
  height: 24px;
  width: 24px;
`;

export default function StorySummary({
  theme,
  time,
  location,
  showSetting,
  loading,
  handleExpand,
  handleSend,
}) {
  const setting = showSetting ? [time, location].filter(Boolean).join(", ") : "";

  return (
    <Row>
      <Summary title={setting ? `${theme} · ${setting}` : theme}>
        <ThemeBit>{theme}</ThemeBit>
        {setting ? <SettingBit> · {setting}</SettingBit> : null}
      </Summary>
      <Buttons>
        <IconButton
          type="button"
          title="Expand"
          aria-label="Expand pickers"
          onClick={handleExpand}
        >
          <SummaryExpandIcon />
        </IconButton>
        <IconButton
          type="button"
          name="send"
          title="Send"
          aria-label="Send"
          onClick={handleSend}
          disabled={loading}
        >
          <SummarySendIcon />
        </IconButton>
      </Buttons>
    </Row>
  );
}
