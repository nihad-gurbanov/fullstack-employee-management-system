package holbies.management.ems.service.impl;

import holbies.management.ems.dto.EmployeeDto;
import holbies.management.ems.entity.Employee;
import holbies.management.ems.exception.ResourceNotFoundException;
import holbies.management.ems.mapper.EmployeeMapper;
import holbies.management.ems.repository.EmployeeRepository;
import holbies.management.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

         Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
         Employee savedEmployee = employeeRepository.save(employee);
          return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee doesn't exist with given id " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
