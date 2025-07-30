#!/usr/bin/env python3
"""
Master Automation Controller
Orchestrates all documentation automation systems
"""

import subprocess
import sys
import os
import time
from datetime import datetime

class AutomationController:
    def __init__(self):
        self.script_dir = os.path.dirname(__file__)
        self.docs_path = os.path.join(os.path.dirname(self.script_dir), 'project-management')
        self.systems = {
            'health_monitor': os.path.join(self.script_dir, 'health_monitor.py'),
            'decision_recorder': os.path.join(self.script_dir, 'decision_recorder.py'),
            'knowledge_extractor': os.path.join(self.script_dir, 'knowledge_extractor.py'),
            'report_generator': os.path.join(self.script_dir, 'report_generator.py')
        }
        
    def run_all_systems(self):
        """Execute all automation systems in sequence"""
        print(f"🚀 Starting automation suite at {datetime.now()}")
        print("📊 Executing all documentation automation systems...")
        
        results = {}
        total_start_time = time.time()
        
        for system_name, script_path in self.systems.items():
            print(f"\n⚡ Running {system_name.replace('_', ' ').title()}...")
            start_time = time.time()
            
            try:
                # Run the script
                result = subprocess.run([sys.executable, script_path], 
                                      capture_output=True, text=True, timeout=300)
                
                execution_time = time.time() - start_time
                
                results[system_name] = {
                    'status': 'success' if result.returncode == 0 else 'failed',
                    'output': result.stdout,
                    'error': result.stderr,
                    'execution_time': execution_time,
                    'timestamp': datetime.now().isoformat()
                }
                
                if result.returncode == 0:
                    print(f"✅ {system_name.replace('_', ' ').title()} completed successfully ({execution_time:.1f}s)")
                    # Print some output for feedback
                    if result.stdout:
                        output_lines = result.stdout.strip().split('\n')
                        for line in output_lines[-3:]:  # Show last 3 lines
                            if line.strip():
                                print(f"   📄 {line.strip()}")
                else:
                    print(f"❌ {system_name.replace('_', ' ').title()} failed (exit code: {result.returncode})")
                    if result.stderr:
                        print(f"   🚨 Error: {result.stderr[:200]}...")
                        
            except subprocess.TimeoutExpired:
                results[system_name] = {
                    'status': 'timeout',
                    'error': 'Script execution timed out after 5 minutes',
                    'execution_time': 300,
                    'timestamp': datetime.now().isoformat()
                }
                print(f"⏰ {system_name.replace('_', ' ').title()} timed out after 5 minutes")
                
            except Exception as e:
                results[system_name] = {
                    'status': 'error',
                    'error': str(e),
                    'execution_time': time.time() - start_time,
                    'timestamp': datetime.now().isoformat()
                }
                print(f"❌ {system_name.replace('_', ' ').title()} failed with error: {e}")
        
        total_execution_time = time.time() - total_start_time
        
        # Generate comprehensive automation report
        self.generate_automation_report(results, total_execution_time)
        
        # Print summary
        self.print_execution_summary(results, total_execution_time)
        
        return results
    
    def generate_automation_report(self, results, total_time):
        """Generate detailed automation execution report"""
        successful_systems = [name for name, result in results.items() if result['status'] == 'success']
        failed_systems = [name for name, result in results.items() if result['status'] != 'success']
        
        success_rate = len(successful_systems) / len(results) * 100
        
        report = f"""# Automation Execution Report
**Generated**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
**Total Execution Time**: {total_time:.1f} seconds

## System Status Summary

### ✅ Successful Systems ({len(successful_systems)}/{len(results)})
"""
        
        for system in successful_systems:
            result = results[system]
            report += f"- **{system.replace('_', ' ').title()}**: ✅ Success ({result['execution_time']:.1f}s)\n"
        
        if failed_systems:
            report += f"\n### ❌ Failed Systems ({len(failed_systems)}/{len(results)})\n"
            for system in failed_systems:
                result = results[system]
                report += f"- **{system.replace('_', ' ').title()}**: ❌ {result['status'].title()}\n"
                if result.get('error'):
                    report += f"  - Error: {result['error'][:200]}...\n"
        
        report += f"""
## Performance Metrics
- **Overall Success Rate**: {success_rate:.1f}%
- **Average Execution Time**: {total_time/len(results):.1f}s per system
- **Total Systems**: {len(results)}
- **Automation Health**: {'🟢 EXCELLENT' if success_rate >= 90 else '🟡 GOOD' if success_rate >= 75 else '🔴 NEEDS ATTENTION'}

## System Integration Status
"""
        
        # Check integration status
        integration_checks = self.verify_system_integration()
        for check_name, check_result in integration_checks.items():
            status_icon = "✅" if check_result['passed'] else "❌"
            report += f"- {status_icon} **{check_name}**: {check_result['status']}\n"
        
        report += f"""
## Next Scheduled Execution
- **Health Monitor**: Every hour (automated)
- **Full Automation Suite**: Daily at 8:00 AM (automated)
- **Emergency Runs**: On-demand via automation controller

## Recommendations
"""
        
        if success_rate >= 95:
            report += "- 🎉 All systems performing excellently - continue current schedule\n"
            report += "- 📊 Monitor performance metrics for optimization opportunities\n"
        elif success_rate >= 75:
            report += "- 🔧 Review failed systems and resolve issues\n"
            report += "- 📈 Consider additional monitoring for failing components\n"
        else:
            report += "- 🚨 Critical: Multiple system failures detected\n"
            report += "- 🔧 Immediate investigation and remediation required\n"
        
        report += f"""
---
*This report is generated automatically after each automation suite execution*
*For manual execution, run: `python3 {os.path.basename(__file__)}`*
"""
        
        # Save automation report
        report_path = os.path.join(self.docs_path, 'AUTOMATION_STATUS.md')
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write(report)
        
        print(f"\n📊 Detailed automation report saved to: {report_path}")
    
    def verify_system_integration(self):
        """Verify that all systems are properly integrated"""
        checks = {}
        
        # Check if all scripts exist
        scripts_exist = all(os.path.exists(script_path) for script_path in self.systems.values())
        checks['Script Files'] = {
            'passed': scripts_exist,
            'status': 'All automation scripts present' if scripts_exist else 'Missing automation scripts'
        }
        
        # Check if output directories exist
        required_dirs = [
            os.path.join(os.path.dirname(self.script_dir), 'reports'),
            os.path.join(os.path.dirname(self.script_dir), 'knowledge-base'),
            self.docs_path
        ]
        dirs_exist = all(os.path.exists(dir_path) for dir_path in required_dirs)
        checks['Directory Structure'] = {
            'passed': dirs_exist,
            'status': 'All required directories present' if dirs_exist else 'Missing required directories'
        }
        
        # Check if key documentation files exist
        key_docs = [
            os.path.join(self.docs_path, 'DOCUMENTATION_AUTOMATION.md'),
            os.path.join(self.docs_path, 'DECISION_AUTOMATION.md'),
            os.path.join(self.docs_path, 'DOC_HEALTH_MONITOR.md'),
            os.path.join(self.docs_path, 'KNOWLEDGE_PRESERVATION.md'),
            os.path.join(self.docs_path, 'AUTOMATED_REPORTING.md')
        ]
        docs_exist = all(os.path.exists(doc_path) for doc_path in key_docs)
        checks['Documentation Files'] = {
            'passed': docs_exist,
            'status': 'All documentation framework files present' if docs_exist else 'Missing framework documentation'
        }
        
        return checks
    
    def print_execution_summary(self, results, total_time):
        """Print a concise execution summary"""
        successful = len([r for r in results.values() if r['status'] == 'success'])
        total = len(results)
        success_rate = successful / total * 100
        
        print(f"\n🎯 AUTOMATION EXECUTION SUMMARY")
        print(f"{'='*50}")
        print(f"✅ Success Rate: {successful}/{total} ({success_rate:.1f}%)")
        print(f"⏱️  Total Time: {total_time:.1f} seconds")
        print(f"📊 System Health: {'🟢 EXCELLENT' if success_rate >= 90 else '🟡 GOOD' if success_rate >= 75 else '🔴 NEEDS ATTENTION'}")
        
        if success_rate == 100:
            print(f"🎉 All automation systems executed successfully!")
            print(f"📈 Documentation automation is fully operational")
        elif success_rate >= 75:
            print(f"✅ Most systems successful - check report for details")
        else:
            print(f"⚠️  Multiple failures detected - review automation status report")
        
        print(f"📄 Detailed report: docs/project-management/AUTOMATION_STATUS.md")
        print(f"{'='*50}")
    
    def run_single_system(self, system_name):
        """Run a single automation system"""
        if system_name not in self.systems:
            print(f"❌ Unknown system: {system_name}")
            print(f"Available systems: {list(self.systems.keys())}")
            return False
        
        print(f"⚡ Running {system_name.replace('_', ' ').title()}...")
        
        try:
            result = subprocess.run([sys.executable, self.systems[system_name]], 
                                  capture_output=True, text=True, timeout=300)
            
            if result.returncode == 0:
                print(f"✅ {system_name.replace('_', ' ').title()} completed successfully")
                if result.stdout:
                    print("Output:")
                    print(result.stdout)
                return True
            else:
                print(f"❌ {system_name.replace('_', ' ').title()} failed")
                if result.stderr:
                    print("Error:")
                    print(result.stderr)
                return False
                
        except Exception as e:
            print(f"❌ Error running {system_name}: {e}")
            return False
    
    def status_check(self):
        """Quick status check of all systems"""
        print("🔍 Checking automation system status...")
        
        all_good = True
        for system_name, script_path in self.systems.items():
            if os.path.exists(script_path):
                print(f"✅ {system_name.replace('_', ' ').title()}: Ready")
            else:
                print(f"❌ {system_name.replace('_', ' ').title()}: Script missing")
                all_good = False
        
        integration_status = self.verify_system_integration()
        for check_name, result in integration_status.items():
            status_icon = "✅" if result['passed'] else "❌"
            print(f"{status_icon} {check_name}: {result['status']}")
            if not result['passed']:
                all_good = False
        
        if all_good:
            print("🎉 All automation systems ready for execution")
        else:
            print("⚠️  Some issues detected - review status above")
        
        return all_good

if __name__ == "__main__":
    controller = AutomationController()
    
    # Check if a specific system was requested
    if len(sys.argv) > 1:
        command = sys.argv[1].lower()
        
        if command == "status":
            controller.status_check()
        elif command in controller.systems:
            controller.run_single_system(command)
        else:
            print(f"Usage: {sys.argv[0]} [status|{'|'.join(controller.systems.keys())}]")
            print("       (no arguments runs all systems)")
    else:
        # Run all systems
        results = controller.run_all_systems()