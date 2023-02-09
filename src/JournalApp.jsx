// Componentes React - AppRouter
import { AppRouter } from "./router/AppRouter"

// Themes
import { AppTheme } from "./theme"

export const JournalApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
}
