export const BtnFilterCeps = ({ setCeps }) => {
    return (
        <button
        onclick={() =>
        setCeps([{ceps}])
        }
        > Ceps </button>
    )
}